
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground mb-8">
        Configure your dashboard preferences and account settings
      </p>

      <Tabs defaultValue="account">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="data">Data Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-6">Account Settings</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="john.doe@soraenergy.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Network Administrator" disabled />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Infrastructure Management" />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Change Password</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-6">Notification Preferences</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <SettingToggle
                  title="Email Notifications"
                  description="Receive system alerts and updates via email"
                  enabled={true}
                />
                
                <SettingToggle
                  title="Station Alerts"
                  description="Get notified when stations require maintenance"
                  enabled={true}
                />
                
                <SettingToggle
                  title="Weekly Reports"
                  description="Receive weekly performance and analytics reports"
                  enabled={false}
                />
                
                <SettingToggle
                  title="System Downtime Notifications"
                  description="Get immediate alerts for system outages"
                  enabled={true}
                />
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Alert Thresholds</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="utilizationThreshold">Utilization Alert Threshold (%)</Label>
                    <Input id="utilizationThreshold" type="number" defaultValue="85" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maintenanceWarning">Maintenance Warning (days)</Label>
                    <Input id="maintenanceWarning" type="number" defaultValue="14" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="display">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-6">Display Settings</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <SettingToggle
                  title="Dark Mode"
                  description="Use dark theme for the dashboard interface"
                  enabled={false}
                />
                
                <SettingToggle
                  title="Compact View"
                  description="Show more content with reduced spacing"
                  enabled={false}
                />
                
                <SettingToggle
                  title="High Contrast Mode"
                  description="Increase visual contrast for better accessibility"
                  enabled={false}
                />
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Map Display Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <SettingToggle
                      title="Satellite View"
                      description="Show satellite imagery on maps"
                      enabled={false}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <SettingToggle
                      title="Traffic Data"
                      description="Display traffic information on maps"
                      enabled={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Display Settings</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="data">
          <Card className="p-6">
            <h3 className="text-xl font-medium mb-6">Data Management</h3>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Data Import/Export</h4>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline">Import Station Data</Button>
                  <Button variant="outline">Export Analytics</Button>
                  <Button variant="outline">Download Reports</Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Data Refresh Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="refreshInterval">Data Refresh Interval (minutes)</Label>
                    <Input id="refreshInterval" type="number" defaultValue="5" />
                  </div>
                  
                  <div className="space-y-4">
                    <SettingToggle
                      title="Real-time Updates"
                      description="Enable real-time data streaming when available"
                      enabled={true}
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Data Retention</h4>
                <div className="space-y-4">
                  <SettingToggle
                    title="Extended History"
                    description="Store detailed station data for up to 24 months"
                    enabled={true}
                  />
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <span className="text-yellow-400">⚠️</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          Changing data retention settings may affect your system's performance and storage requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Data Settings</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface SettingToggleProps {
  title: string;
  description: string;
  enabled: boolean;
}

const SettingToggle = ({ title, description, enabled }: SettingToggleProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch defaultChecked={enabled} />
    </div>
  );
};

export default Settings;
